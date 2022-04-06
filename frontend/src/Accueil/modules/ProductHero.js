import * as React from 'react';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
'https://mobimg.b-cdn.net/v3/fetch/63/634a5e99d9789edb51ef4fb1bb387f6f.jpeg';

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
    
      <Typography color="inherit" align="center" variant="h2" >
        Votre Plateforme d'achat et de vente
      </Typography>
      <br/>
     
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}