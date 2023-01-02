import { initializeApp } from "firebase/app"
import { getFirestore, collection , getDocs, addDoc , deleteDoc , doc } from "firebase/firestore"


//so collection will get us a refrence to the collection where we are adding or deleting the items, similarily doc will be the refrence to the particular document inside the collection which we want to delete or add specefic opertations on 

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD-ZOczw4yZ-8YuHBmXemk34t2wkKizEYo",
    authDomain: "fir-project1-6f2b8.firebaseapp.com",
    projectId: "fir-project1-6f2b8",
    storageBucket: "fir-project1-6f2b8.appspot.com",
    messagingSenderId: "1089480988051",
    appId: "1:1089480988051:web:74f7df069ce4ee2a7a0466",
    measurementId: "G-DC90DBDPZW"
  };

const FirebaseApp=initializeApp(firebaseConfig); //initialize the firebase app


// initialize firestore services 
 
const db= getFirestore() // db stands for the database , the database is stored in this constant

// collection refrence
// call refrence
const colref= collection(db,'books')

// get collection data
getDocs(colref).then((snapshot)=>{
    let books=[];
    snapshot.docs.forEach((elm)=>{
       books.push({...elm.data(),id: elm.id})
    })
    console.log(books)
}).catch((err)=>console.log(err))

// let title=document.getElementsByName("title");
// let author=document.getElementsByName("author")

let add=document.getElementsByClassName("add")[0];
// console.log(add)
add.addEventListener('submit',function nams(e){
    e.preventDefault();
    addDoc(colref,{title:add.title.value , author: add.author.value }).then(()=>{
        add.reset();
    })
} )

let del=document.getElementsByClassName("delete")[0];
del.addEventListener('submit',function (e){
    e.preventDefault();

    const docref=doc(db,'books',del.id.value);
    deleteDoc(docref).then(()=>{
        del.reset();
    })
})