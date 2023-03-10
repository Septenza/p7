
import React, { useState } from "react";
import "./Carrousel.css";
import fleche from "../../assets/img/Components/Carrousel/Fleche.png";

function Carrousel({ images }) {
    /* Crée un Hook d'état */
    let [imgAfficher, changerImg] = useState(0); //je définie l'index de la première image à 0
    let [count, setCount] = useState(1);
    let nombreImg = images.length;  // longueur du tableau d'images

    // Function to increment count by 1
    const incrementCount = () => {
        // Update state with incremented value
        setCount(count + 1);
    };

    // Function to increment count by 1
    const decrementCount = () => {
        // Update state with incremented value
        setCount(count - 1);
    };


    const imgPrecedente = () => {

        if (imgAfficher === 0) {
            changerImg(nombreImg - 1);  // on repart au dernier slide quand on est au premier
            setCount(nombreImg)
        } else {
            changerImg(imgAfficher - 1);
            decrementCount()
        }
        return (changerImg);
    };

    const imgSuivante = () => {
        if (imgAfficher === nombreImg - 1) {
            changerImg(nombreImg = 0);   // on repart au premier slide quand on arrive au dernier
            setCount(1)
        } else {
            changerImg(imgAfficher + 1);
            incrementCount()
        }
        return (changerImg);

    };

    return (
        <div className="carrousel">
            {   //Affichage des flèches seulement si length (nombreImg) > 1
                nombreImg > 1 && <img className="fleche fleche-gauche" src={fleche} alt="Contenu précedént" onClick={imgPrecedente} />
            }
            {
                nombreImg > 1 && <img className="fleche fleche-droite" src={fleche} alt="Contenu suivant" onClick={imgSuivante} />
            }
            {
                images.map((image, index) => {
                    return (
                        <div>
                            <img key={index} className={index === imgAfficher ? 'carrousel-img actif' : 'carrousel-img'} src={image} alt="Logement" />
                            {
                                nombreImg > 1 && <p className='slideCount'>{count} / {nombreImg}</p>
                            }


                        </div>
                    )
                })
            }




        </div>
    );
}

export default Carrousel;