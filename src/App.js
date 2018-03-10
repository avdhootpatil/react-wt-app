import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FortCard from './Card.js';


let fortData = {
   loc : {
     name : 'Maharashtra',
     forts :[
       {
          name : 'Raigad',
          location:'Raigad district',
          information :'In 1656 A.C. Chhatrapati Shivaji Maharaj got the charge of Raigad Fort from'+
                        'Jawalis Chandrarrao More.'+
                        'Before that from 12th to 15th century, Maratha ruled Raigad Fort.'+
                        'Maratha’s lost the charge of the fort in 1436 A.C. after beaten by Bahamani King Alluddin'+
                        'Shaha II. Later on in 1479 A.C. and 1636 A. C. AhmadNagar’s Nijam and Vijapur’s Aadilshaha'+ 
                        'ruled respectively. Aadilshaha renamed the fort as ‘Islam gad’ and hand over the charge of'+ 
                        'the fort to Siddi of Janjira.'+
                        'Raigad fort is located around 2850 feets high from the sea level. The fort is situated at'+
                        'highest peak of Sahyadri Mountains and because of that, fort gets the protection'+
                        'naturally. In 1664, King Shivaji declared Raigad as the capital of his empire. Shiv'+ 
                        'Rajyabhishek (crowning ceremony of King Shivaji) is an important event in the History'+
                        'of India. In April 1680, the King Shivaji passed away and Aurangzeb taken charge of the'+
                        'fort after beating Shivaji’s son Chhatrapati Sambhaji. Again Chhatrapati Shahu’s army'+ 
                        'gets the fort in 1734. From 1734 to 1758 Peshavas ruled Raigad Fort. British Officer'+                          
                        'Colonel Prarther attacked on Raigad Fort in 1818 and destroyed most of structures including'+ 
                        'King Shivaji’s and Queen’s palaces. They got around Rs.500,000/- in form of gold coins as'+ 
                        'hoard.',
          image : '/src/images/raigad.jpg'
     },
    {
          name : 'Rajgad',
          location : 'Rajgad district',
          information : 'Rajgad (The king of all forts in Marathi) is one of the most important forts'+
                        'in Maharashtra.The fort was the capital of Maratha empire for more than 25 years. This was'+
                        'one of the first few forts captured by Shivaji Maharaj.'+ 
                        'Rajgad is witness to the many important incidents in nascent Maratha Empire. '+
                        'The fort was called Murumb Devecha Dongar (the mountain of god Murumb) before Shivaji'+
                        'Maharaj captured it from Aadilshaha. Shivaji Maharaj renovated the fort and constructed '+
                        'the fortification for this fort.The treasure he had got while construction of Torna'+
                        'was utilized for this task. He then renamed the fort to Rajgad.'+ 
                        'Saibai, the fist wife of Shivaji Maharaj and mother of Chhatrapati Sambhaji, pased away '+
                        'on this fort in September 1659. When Shivaji Maharaj was preparing to fight Afzalkhan on'+
                        'Pratapgad. She was just 26 years old then. Her tomb is on Rajgads Padmavati Mahi, before'+
                        'the temple of goddess Padmavati.',
          image : '/src/images/rajgad.jpg'
     },
     {
          name : 'Shivneri',
          location : 'Junnar Taluka',
          information : 'Shivneri is the birthplace of the great king of Maratha empire – '+
                        'The Chhatrapati Shivaji Maharaj Bhosale. Shivaji Maharaj was born on this fort in 1630 AD.'+
                        'This is the place where Shivaji Maharaj spent his most of the childhood. At this fort,'+
                        'he learned the qualities of great king and tactics required to build the empire.'+
                        'He was greatly influenced by the teachings of his mother-Jijabai. Shivneri has become '+
                        'a sacred place by the presence of Shivaji Maharaj. The fort is located at 3 kms from '+
                        'Junnar.The hill on which Shivneri fort is built is known as Shivneri hill. This hill'+
                        'was built long period back by Satavahana Dynasty Kings. Various dynasties like '+
                        'Satavahana’s, Shilahara’s, Yadava’s, the Bahamani’s, Mughal’s and Maratha’s ruled this'+
                        'fort. The fort was granted to Maloji Bhosale (Grandfather of Shivaji Maharaj) in 1599 AD.'+
                        'This fort was surrendered to the Mughals and could not take it back in the entire lifetime'+
                        'of Maharaj. After the long period in 1716, the fort was won by Shahu Maharaj. Nowadays,'+                           
                        'the structures on the fort are in ruins. Only some broken parts of the buildings can be seen.',
          image : '/src/images/shivneri.jpg'
     },
     {
          name : 'Sindhudurg',
          location : 'ratnagiri district',
          information : 'In 1664-67 AD, Shivaji erected this fort on 48 acres of   island. Shivaji Maharaj personally selected this site,'+
                        'a rocky island, Kurte. It took 500 stone splitters and stonebreakers, 200 black smiths, 3000 laborers and 100’s of '+
                        'skilled artists who toiled very hard to complete this fort in three years. A notable feature is that the foundation '+
                        'stones were laid down firmly in molten lead. This is evident from the stone inscriptions. One of the best preserved'+
                        'forts of the Marathas, the 48 acre Sindhudurg fort has a four kms long zigzag line of 9 meters high and 3 meters wide'+
                        'rampart with 42 bastions.'+
                        
                        'Initially, 3 kms. long outer wall (Tat) was built. Average height of wall is 10 meters and breadth is 2 to 4 meters.'+ 
                        'The design of main door is an enigma. It has been a hallmark of Maratha Architecture of fort building. It defies '+
                        'detection of its location to the attacker. The technique was so deceptive for the enemy that they could not even '+
                        'realize where the entrance was due to blind curves. Zigzag pattern of outer wall was so built that   the enemy would'+ 
                        'be visible from any point inside the fort and the troops inside could fire their guns and cannons effectively and humble'+
                        'the enemy. Cores of hones (gold coins) form Surat bounty, were spent to built this wonderful fort.'+
                        
                        'Chatrapati Shivaji’s younger son Rajaram in his remembrance built this temple. Shivaji’s idol stands in a boatman’s attire'+
                        'inside the temple and probably only one of its’ kind in the country – where the image of Shivaji is without a beard. '+
                        'Outside the southern wall there is a small beach, called Ranichi Vela (Queen’s private beach), where Queen Tarabai, '+
                        'daughter-in law of Shivaji, used to enjoy her sea-bath. The fort also houses some twenty Hindu-Muslim families, who have'+ 
                        'been living there for generations. Side the fort there are three wells of drinkable water, which is a nature’s marvel as '+
                        'sea surrounds the fort on all four sides. On a rocky island between Sindhudurg and the coast stood the small fort of '+
                        'Padmagad, now in ruins. It acted as a shield for Sindhudurg and was also used for shipbuilding.' ,
          image : '/src/images/sindhudurg.jpg'
     },
     {
          name : 'Sinhgad',
          location : 'Pune district',
          information : 'The Sinhgad Fort was initially known as "Kondhana" after the sage Kaundinya. The Kaundinyeshwar temple coupled with the '+
                        'caves and carvings indicate that the fort had probably been built around two thousand years ago. It was seized by Muhammad '+
                        'bin Tughlaq from the Koli in 1328 AD.'+
                        'Shahaji Bhosale, as the commander of Ibrahim Adil Shah I, was entrusted with the control of the Pune region. '+
                        'His son Shivaji, refused to accept the Adilshahi and initiated the task of setting up Swarajya. Shivaji gained '+
                        'control of Kondana in 1647 by convincing Siddi Amber, the Adilshahi Sardar who controlled the fort, that he, the '+
                        'son of Shahaji Bhosale, could manage the forts defences optimally. Bapuji Mudgal Deshpande played a key role in '+
                        'this activity. Adil Shah jailed Siddi Amber for this treasonous act and schemed to get it back. He imprisoned Shahaji'+
                        'Bhosale for a concocted crime and informed Shivaji. In 1649, Adil Shah traded the fort for Shahajis release.'+
                        'One of the most famous battles on Sinhgad was fought by Tanaji Malusare, a general of Chhatrapati Shivaji '+
                        'of the Maratha Empire in order to recapture the fort on March 1670'+
                        'View from Sinhagad'+
                        'A steep cliff leading to the fort was scaled in the dead of the night with the help of a tamed monitor lizard named '+
                        '"Yashwanti", colloquially known as a ghorpad. Thereafter, A fierce battle ensued between Tanaji and his men versus '+
                        'the Mughal army headed by "Udaybhan Singh Rathod", a Rajput sardar who had control of the fort. Tanaji Malusare lost'+
                        'his life, but his brother "Suryaji" took over and captured the Kondana fort, now known as Sinhagad.'+
                        'here is an anecdote that upon hearing of Tanajis death, Chhatrapati Shivaji expressed his remorse with the words,'+ 
                        '"Gad aala, pan Sinha gela" - "The Fort is captured, but the Lion was lost".',
          image : '/src/images/sinhagad.jpg'
     },
     {
          name : 'Torna',
          location : 'Pune district',
          information : '"Torna" (Tornagad) or "Prachandgad" was the first fort captured by Shivaji Maharaj. He captured this fort and started'+ 
                        'his journey to build the Maratha empire when he was just sixteen years old (in 1643). This shows his valor and '+
                        'determination to construct a new empire.'+
                        'When Shivaji Maharaj took over this fort from Aadilshah (Sultan of Vijapur) this fort did not had too much'+
                        'construction on it. This fort was not given more stratagic importance by the Aadilshahas. After capturing this fort,'+
                        'Shivaji Maharaj started to construct some buildings on the forts and fortification for the fort. This was necessary '+
                        'to make the fort a secure place which can be used in forthcoming war against the Aadilshah and the Mughals. While '+
                        'construction Shivaji Maharaj  found a treasure on the fort. Assuming this to be a good omen, he utilised this money '+
                        'on construction of this fort and  the fort "Rajgad".'+
                        'The fort has two temples on it. The first one is of goddess "Toranjai" and the second one is of goddess "Menghai". '+
                        'The fort has two major wings (in Marathi "Machi") the "Zunzar Machi" and the "Budhala Machi". On the Budhala Machi, '+
                        'there is big vertical rock. When seen from distance it seems to be a thumb held up. The fort also has two gates: the '+
                        '"Binicha Darwaja" (Bini Gate) and "Konkan Darwaja" (Konkan Gate). The Binich Darwaja takes you inside the fort, while '+
                        'the Konkan Darwaja takes you to the Budhala Machi.',
          image : '/src/images/torna.jpg'
     },
     {
          name : 'Vijaydurg',
          location : 'Konkan',
          information : 'Vijaydurg fort is located in Devgad district. This fort was built by King Bhoj in 1205 and was known as “Gheria”.'+
                        'Later Chatrapati Shivaji Maharaj took over this fort and named it “Vijaydurga”. Vijaydurg fort was also known as '+
                        '“Eastern Gibraltar” as this fort was impregnable for a long time like the fort “Gibraltar” in Europe. A dilapidated'+ 
                        'board at the entrance of the fort relates its history. One of the best views of the fort is from the jetty. The fort '+
                        'stretches out into the sea and a walk inside its precincts is worthwhile. The earlier fort covered area of 5 acres '+
                        'and was surrounded by sea on all the 4 sides. Over the years the eastern trench was reclaimed and the road was constructed'+ 
                        'thereon.'+
                        'Chatrapati Shivaji Maharaj added triple rows of huge walls, umpteen towers and spacious inner buildings to '+
                        'it and strengthened it in the 17th century. Vijaydurg’s beach is a stretch of about a kilometer with good '+
                        'views of the fort at the right and a small plateau with a hut to the left. Once naval bases, Vijaydurg fort '+
                        'and Sindhudurg fort bear testimony to Maharashtra’s martial supremacy during Shivaji’s reign.'+
                        'This is only one of the two forts of the Maratha kingdom, where Chatrapati Shivaji Maharaj personally '+
                        'hoisted the saffron flag. The other fort is “Torana”. This impregnable fort has advantage due to its '+
                        'location. One such advantage is 40 km long waghotan/kharepatan Creek. The large size ships can not enter '+
                        'the shallow water of this creek and hence Maratha warships were anchored in this creek. These ships were '+
                        'invisible from deep sea.'+
                        'There is 200m long, subsea /underground man made tunnel from the fort to the Dhulap’s palatial house in '+
                        'the village. The fencing wall constructed at 8-10 m deep below sea level, 300ft from the fort is another '+
                        'architectural wonder. The wall constructed with laterite stones was about 122 mtr long, 3 mtr high & 7 mtr '+
                        'in breadth. Majority of attacking ships hit with this wall and capsized as this wall is not visible above '+
                        'the sea level.'+
                        'Approx 1.5 km from the fort in the Wagjotan Creek is a naval dock. The maratha warships were built and repaired '+
                        'in this dock. The ships built in this dock were of the 500 tonnage capacity.',
          image : '/src/images/vijaydurg.jpg'
     
     }
    ]
    }
} 
 
class Filter extends Component{
  render () {
    return(
        <div style={{marginBottom: '3em'}}>
          <input type ='text'/>
        </div>
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data : {}};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({data: fortData}); 
    },2000);  
  }

  render() {
    return (
      <div className="App" >
        {this.state.data.loc ?  
          <div>
          <h1>Forts in {this.state.data.loc.name}</h1>    
          {
            this.state.data.loc.forts.map(forts =>
              <FortCard fort={forts}/>
            )}  
        </div>:<h1>Loading...</h1>
       } 
        
           
      </div>
    );
  }
}

export default App;
