import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import "../Accueilstyle.css"

const backgroundImage =
'https://res.cloudinary.com/doaf5left/image/upload/v1649323439/samples/im_www1yk.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', 
        // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
     
      <Typography color="blanchedalmond"  align="center" variant="h3"  >
      <div className="text2"> Votre plateforme de mise en Relation 
      </div>
      </Typography>
     
      <br/>
     
      <Typography variant="h5" color="blanchedalmond"  fontFamily="Georgia, 'Times New Roman', Times, serif" align="center" sx={{ mt: 2 }}>
       <div className="text1">
       Vous etes une  Start-up ? : Venez un grand marché Vous tend les bras  
       </div>
       <br/>
       <Button className="btn-warning">
         Nous vous Attendons
       </Button>

       <br/><br/>
       <div className="text1">
      Vous etes un  Client ? : nous vous offrons la possibilité D'Acheter en toute Sécurité
       </div>
      </Typography>
    </ProductHeroLayout>
  );
}