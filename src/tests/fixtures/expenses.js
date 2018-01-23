import moment from 'moment';

 export default [
	{
		id:'1',
		description:'Gum',
		note:'',
		amount:176,
		createdAt:0
	},
	{
		id:'2',
		description:'rent',
		note:'',
		amount:1600,
		createdAt: moment(0).subtract(4,'days').valueOf()
	},
	{
		id:'3',
		description:'credit',
		note:'',
		amount:4000,
		createdAt:moment(0).add(4,'days').valueOf()
	}
];