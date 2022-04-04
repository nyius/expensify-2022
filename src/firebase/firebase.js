import { initializeApp } from 'firebase/app';
import {
	getDatabase,
	ref,
	set,
	update,
	remove,
	onValue,
	off,
	push,
	onChildRemoved,
	onChildChanged,
	onChildAdded,
} from 'firebase/database';

const config = {
	apiKey: 'AIzaSyA-aiouB_UVU4aA6raWEqvIZxnj3BiDlw8',
	authDomain: 'expensify-76db9.firebaseapp.com',
	databaseURL: 'https://expensify-76db9-default-rtdb.firebaseio.com',
	projectId: 'expensify-76db9',
	storageBucket: 'expensify-76db9.appspot.com',
	messagingSenderId: '777809901919',
	appId: '1:777809901919:web:2eabca62894c642f715eea',
};

initializeApp(config);

// get our database
export const database = getDatabase();
// we can set up a reference right into variables
const databaseRef = ref(database);
// const databaseExpensesRef = ref(database, 'expenses');
// const databaseNotesRef = ref(database, 'notes');
// const databaseAgeRef = ref(database, 'age');
// const databaseWeightRef = ref(database, 'weight');

// this is the type of structure that firebase would want for a notes object containing multiple notes
/*
const firebaseNotes = {
	notes: {
		id: {
			title: 'first note',
			body: 'This is my note',
		},
		id2: {
			title: 'second note',
			body: 'This is my note',
		},
	},
};

const notes = [
	{
		id: `12`,
		title: 'first note',
		body: 'This is my note',
	},
	{
		id: `19qwd948`,
		title: 'second note',
		body: 'This is my note',
	},
];


push(databaseNotesRef, {
	title: 'first note',
	body: 'This is my note',
});


// set(databaseRef, notes);

push(databaseExpensesRef, {
	description: 'Rent',
	note: '',
	amount: -1800,
	createdAt: 190701129,
});
*/
/*
onChildRemoved(databaseExpensesRef, snapshot => {
	console.log(snapshot.key, snapshot.val());
});

onChildChanged(databaseExpensesRef, snapshot => {
	console.log(snapshot.key, snapshot.val());
});

onChildAdded(databaseExpensesRef, snapshot => {
	console.log(snapshot.key, snapshot.val());
});


// here we listen for our expenses database
const expensesListener = onValue(
	databaseExpensesRef,
	snapshot => {
		const expenses = [];

		// for each expense in our snapshot, we want to push it to our expenses array
		snapshot.forEach(childSnapshot => {
			expenses.push({
				// we can get the unique id that firebase created with 'key'
				id: childSnapshot.key,
				// spread out the rest of the db object to go into the array
				...childSnapshot.val(),
			});
		});

		console.log(expenses);
	},
	{
		onlyOnce: false,
	}
);
*/

try {
	/*
	// set a new item to the databse as a test
	set(databaseRef, {
		name: 'Joseph Scicluna',
		age: 30,
		isSingle: false,
		location: {
			city: 'Elmvale',
			country: 'Canada',
		},
	});
	*/
} catch (error) {
	console.log(`Init error: `, error);
}

try {
	/*
	// specify the DB we want to update, and then our info
	update(databaseRef, {
		//update existing info
		age: 31,
		// new info to be added
		height: '5.7',
		weight: 9000,
		// location: {
		// be careful updating nested objects, we're basically saying that we want 'location' to be this entire new object
		// containing ONLY this city, but will delete the country from above
		// city: 'Charlottetown',
		// },
	});

	// We're saying we want to update things inside of 'location/;
	update(ref(database, 'location/'), {
		//update existing info
		city: 'Barrie',
	});

	// remove information by setting it to null
	update(databaseRef, {
		age: null,
	});

	// remove info using 'remove'
	remove(ref(database, 'height'));

	// heres how I could update nested items right at the root level
	// i can do it by wrapping my id and quotes and using / to go inside of an object
	update(databaseRef, {
		age: 32,
		'location/city': 'Elmvale',
	});

	// use onValue to read information from our database as a 'snapshot'
	// with onlyOnce set to true, it will just grab this info once and never again (like if that info in the db)
	//change, we would never know until we ran another onValue()
	// onValue(
	// 	ref(database, 'age'),
	// 	dataSnapshot => {
	// 		const val = dataSnapshot.val();
	// 		console.log(val);
	// 	},
	// 	{
	// 		onlyOnce: true,
	// 	}
	// );

	// By setting onlyOnce to false, our function inside with the snapshot will run EVERY TIME that the information
	//is updated on our database

	const onValueChange = onValue(
		databaseAgeRef,
		dataSnapshot => {
			const val = dataSnapshot.val();
			console.log(val);
		},
		{
			onlyOnce: false,
		}
	);

	setTimeout(() => {
		update(databaseRef, {
			age: 33,
		});
	}, 3000);

	// here we unsubscribe from our onValue listener
	setTimeout(() => {
		off(databaseAgeRef, onValueChange());
	}, 4500);

	setTimeout(() => {
		update(databaseRef, {
			age: 34,
		});
	}, 6000);

	const onValueChangeWeight = onValue(
		databaseWeightRef,
		dataSnapshot => {
			const val = dataSnapshot.val();
			console.log(val);
		},
		{
			onlyOnce: false,
		}
	);

	setTimeout(() => {
		update(databaseWeightRef, {
			weight: 400,
		});
	}, 7000);
	setTimeout(() => {
		update(databaseWeightRef, {
			weight: 200,
		});
	}, 7600);

	setTimeout(() => {
		off(databaseWeightRef, onValueChangeWeight());
	}, 8000);

	setTimeout(() => {
		update(databaseWeightRef, {
			weight: 600,
		});
	}, 9000);
	*/
} catch (error) {
	console.log(`Update error: `, error);
}
