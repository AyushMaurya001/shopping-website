import React, { useEffect, useState } from 'react'
import InputBox from './InputBox'
import firebase from '../firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function InputBoxImage({ setImagesUrl }) {

  const [image, setImage] = useState(undefined);

  useEffect(() => {
    image && uploadToFirebase({ file: image, fileType: 'image' })
  }, [image])

  const uploadToFirebase = ({ file, fileType }) => {

    console.log(file)
    console.log(fileType)
    const storage = getStorage(firebase);

    const folder = fileType === 'image' ? 'images/' : 'videos/'
    const fileName = new Date().getTime() + file.name + folder;

    // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, folder + fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;

          // ...

          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, 
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          setImagesUrl(i => i.push(downloadURL))
        });
      }
    );

  }

  return (
    <InputBox type='file' accept='image/*' className=' w-full' onChange={(e) => {
      setImage(e.target.files[0]);
    }} />
  )
}
