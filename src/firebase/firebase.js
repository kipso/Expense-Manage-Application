import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
 };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref().set({
// 	name:'Stephin Kipso',
// 	age:22,
// 	stressLevel: 6,
// 	job: {
// 		title:'Software Developer',
// 		company:'Amazon'
// 	},
// 	location: {
// 		city:"Bangalore",
// 		country:"India"
// 	}
// }).then(() => {
// 	console.log('Data is saved');
// }).catch((e) => {
// 	console.log('This failed',e);
// });

// database.ref().update({
// 	stressLevel:9,
// 	'job/company':'Twitter',
// 	'location/city':'Chennai'
// });

// database.ref('isSingle')
// .remove()
// .then(()=>{
// 	console.log('data removed');
// }).catch((e) => {
// 	console.log('did not remove data',e);
// });