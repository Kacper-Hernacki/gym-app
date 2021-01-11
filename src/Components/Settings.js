import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Settings.css';
import SaveIcon from '@material-ui/icons/Save';
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import { storage, db } from '../firebase';
import firebase from 'firebase';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

function Settings() {
  const user = useSelector(selectUser);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [squat, setSquat] = useState();
  const [bench, setBench] = useState();
  const [deadlift, setDeadlift] = useState();
  const [image, setImage] = useState(null);
  const [avatars, setAvatars] = useState(null);
  const [progress, setProgress] = useState(0);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .collection('userData')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setUserData(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  useEffect(() => {
    db.collection('users')
      .doc(user.uid)
      .collection('avatars')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) =>
        setAvatars(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  console.log('avatars>>>>>>>', avatars);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
      console.log('image>>>>>>>', image);
    }
  };

  const handleUpload = () => {
    if (image) {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // progress
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          // Error
          console.log('ERRROR', error);
          alert(error.message);
        },
        () => {
          // complete
          storage
            .ref('images')
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              //post image
              db.collection('users').doc(user.uid).collection('avatars').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                imageUrl: url,
                // username: username
              });
              setImage(null);
            });
        }
      );
    }
  };

  const handleUploadData = () => {
    if (name && age && squat && bench && deadlift) {
      db.collection('users').doc(user.uid).collection('userData').add({
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        name: name,
        squat: squat,
        bench: bench,
        deadlift: deadlift,
        age: age,
      });
    }
  };

  return (
    <div className="settings">
      <h1>Settings</h1>
      <input
        onChange={handleChange}
        className="settings__inputFile"
        type="file"
      />
      <PhotoLibraryIcon className="settings__image" />
      <progress className="settings__progress" value={progress} max="100" />
      <div className="settings__container">
        <SaveAltIcon onClick={handleUpload} className="settings__edit" />

        {avatars === null ? (
          <Avatar src={user.photo} className="settings__avatar" />
        ) : (
          <Avatar src={avatars[0]?.imageUrl} className="settings__avatar" />
        )}

        <div className="settings__data">
          <SaveIcon onClick={handleUploadData} className="settings__dataEdit" />
          <div className="settings__NameRow">
            <div className="settings__nameRowHeaders">
              <h2>Name</h2>
              <h2>Age</h2>
            </div>
            <div className="settings__nameRowInputs">
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="settings__input"
                type="text"
                placeholder={userData[0]?.data.name}
              />
              <input
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="settings__input"
                type="number"
                placeholder={userData[0]?.data.age}
              />
            </div>
          </div>
          <div className="settings__maxesRow">
            <h1>Maxes</h1>
            <div className="settings__maxesContainer">
              <div className="settings__maxContainer">
                <h2>Squat</h2>
                <input
                  value={squat}
                  onChange={(e) => setSquat(e.target.value)}
                  className="settings__input"
                  type="number"
                  placeholder={userData[0]?.data.squat}
                />
              </div>
              <div className="settings__maxContainer">
                <h2>Bench Press</h2>
                <input
                  value={bench}
                  onChange={(e) => setBench(e.target.value)}
                  className="settings__input"
                  type="number"
                  placeholder={userData[0]?.data.bench}
                />
              </div>
              <div className="settings__maxContainer">
                <h2>Deadlift</h2>
                <input
                  value={deadlift}
                  onChange={(e) => setDeadlift(e.target.value)}
                  className="settings__input"
                  type="number"
                  placeholder={userData[0]?.data.deadlift}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
