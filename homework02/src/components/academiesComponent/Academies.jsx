import './academies.css';
const Academies = (props) =>{
    const academys =[
        {id: '1', name: 'Seavus', description: 'programing'},
        {id: '2', name: 'Semos', description: 'UxDesign'},
        {id: '3', name: 'Brainster', description: 'PytonCode'}
      ];

      const academyFillter= academys.filter(x=> x.name== props.name);
   
        
 return(
    
     <div className="academyArr">
    {
        academyFillter.map((x) => (
            <div key={x.id}>
                <h3>Name: {x.name}</h3>
                <p>Descitipn:{x.description}</p>
            </div>
        ))
    }
    </div>

 )
}

export default Academies;