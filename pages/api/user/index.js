import db from '../../../utils/db';
import initAuth from '../../../utils/initAuth'


export default async (req, res) => {
    

  try {
    const users = await db.collection('users').get();
    const mecze = await db.collection('meczes').orderBy('created','asc').get();
    const meczeData = mecze.docs.map(mecz => ({
      id: mecz.id,
      ...mecz.data()}));
    const usersData = users.docs.map(user => user.data());

    const { id } = await db.collection('users').add({
        //id_auth:'Xdq974O90FfeQMv7q2Rdy7TnRA03', //Sylwek 
        //id_auth: "M4YPiAkkqwfbSz3tILO0enGlD972",//Janusz janusz@janusz.pl 12341234  
        //id_auth: "O48tg1iHZtPy1ioGsPa7Tu9NJWG3",//Patryk  patryk@patryk.pl 12341234 
        id_auth: "DCjm6ozWFoONpbk6yCHoAhkSPCf2", //Zbyszek zbyszek@zb.pl  12341234
        name: 'Zbyszek',
        created: new Date().toISOString(),
    });
    const userid = id
    let a = 0
    for(let i=0 ; i<meczeData.length; i++) {
      console.log(i);
      console.log(a);
      
        const { id } = db.collection('wyniks').add({   
          
            //id_user: 'Xdq974O90FfeQMv7q2Rdy7TnRA03',//Sylwek
            //id_user: 'M4YPiAkkqwfbSz3tILO0enGlD972', //Janusz
            //id_user: 'O48tg1iHZtPy1ioGsPa7Tu9NJWG3', //Patryk
            id_user: 'DCjm6ozWFoONpbk6yCHoAhkSPCf2', //Zbyszek
            mecz_id: meczeData[i].id,
            status: false,
            wynik_1: '',
            wynik_2: '',
            created: new Date().toISOString(),
            ordertable : a
        }
        );
        a++
    }
    res.status(200).json('dodano');

   console.log('dodano usera')
    

  } catch (e) {
    res.status(400).end();
  }
}
  