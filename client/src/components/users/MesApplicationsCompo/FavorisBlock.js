import React, {Fragment, useContext, useEffect, useState} from 'react';
import axios from "axios";
import {ENTRYPOINT} from "../../../config/entrypoint";
import {authContext} from "../../../context/AuthContext";

const FavorisBlock = (props) =>
{
const [error, setError] = useState(null);
const { auth } = useContext(authContext);
const [workplacesFav, setWorkplacesFav] = useState([]);
const [workplacesAll, setWorkplacesAll] = useState([]);

useEffect(()=>{
  //Récup du token à partir de l'authent (pas du localStorage car pas encore initié)
  let token = auth.data.token;
  let userId = auth.data.UserData.id;
  // Params
  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: 'Bearer '+ token ,
    }
  };

  axios.get(new URL('/users/'+userId, ENTRYPOINT), {}, axiosConfig)
    .then(reponse => reponse.data)
    .then(data => {

      // console.log(data.workplaceUsers);
      data.workplaceUsers.forEach(function (element,index){
        console.log(element);
        const i = 0;
        if(element.IsFav) {
          setWorkplacesFav([{name: element.App.appInfos.Name, ins: element.App.ins, fav: element.IsFav}]);
        }else{
          setWorkplacesAll([{name: element.App.appInfos.Name, ins: element.App.ins, fav: element.IsFav}]);
        }
        i++;
      })

    })
    .catch((err) => {
      setError(true);
    });
}, [])
console.log("FAV:",workplacesFav,"ALL:",workplacesAll);

function Portfolio(props){
  if(workplacesAll.length == 0){
    return (
      <div className="col-md-12">
        <div className="text-center">
          <p className="text-blue">Vous n’avez aucune autre application dans votre portefeuille</p>
        </div>
      </div>
    );
  }else{
    return (
      workplacesAll.map((workplace, i) =>
        <div className="col-md-2">
          <div className="block-favoris">
            <a className="block-favoris-title" eventKey={i}>{workplace.name}</a>
            <ul>
              <li><span>Mano</span> Julien</li>
              <li><span eventKey={i}>INS : {workplace.ins}</span></li>
              <li><span>LPP : SI DOATT</span></li>
              <li>DOATT</li>
            </ul>
            <div className="row star-favoris">
              <div className="col-md-10">DOAAT OPTIMISATION COURT TERME (OCT)</div>
              <div className="col-md-2"><a href="#" className="star"></a></div>
            </div>
          </div>
        </div>
      )
    );
  }
}

function HaveFav(props){
  if(workplacesFav.length ==0){
    return (
      <div className="col-md-12">
        <div className="text-center">
          <img src="img/Shape.svg"/>
          <p className="text-blue">Vous n’avez aucune application en favoris pour le moment…<br/>
            Pour ajouter une application, cliquez sur l’étoile.</p>
        </div>
      </div>
    );
  }else{
    return (
      workplacesFav.map((workplace, i) =>
      <div className="col-md-2">
        <div className="block-favoris">
          <a className="block-favoris-title" eventKey={i}>{workplace.name}</a>
          <ul>
            <li><span>Mano</span> Julien</li>
            <li><span eventKey={i}>INS : {workplace.ins}</span></li>
            <li><span>LPP : SI DOATT</span></li>
            <li>DOATT</li>
          </ul>
          <div className="row star-favoris">
            <div className="col-md-10">DOAAT OPTIMISATION COURT TERME (OCT)</div>
            <div className="col-md-2"><a href="#" className="starFav"></a></div>
          </div>
        </div>
      </div>
      )
    );

  }
}

return (
<div className="block-rosie row">
  <div className="col-md-12">
    <h2>Mes applications favorites</h2>
      <div className="row row-favoris">
        <HaveFav/>
      </div>
  </div>
  <div className="col-md-12">
    <h2>Mon portefeuille d'applications</h2>
    <div className="row button-rosie">
      <div className="col-md-6">
        <input placeholder="Rechercher" className="search-rosie" type="text"/>
      </div>
      <div className="col-md-6 text-right">
        <button className="create-button">Créer une application</button>
      </div>
    </div>
    <div className="row row-favoris">
        <Portfolio/>
    </div>
  </div>
</div>




)
}

export default FavorisBlock;
