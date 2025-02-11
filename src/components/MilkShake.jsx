import './Row.css';
import imag1 from '../milkshake/CHOCOLET ICE CREEM.jpeg';
import imag2 from '../iceram/Eiswaffel mit Karamell Generative AI _ Premium KI-generiertes Bild.jpeg';
import imag3 from '../iceram/Ice Cream.jpeg';
import imag4 from '../iceram/Top 10 digital art studios in the world_.jpeg';
import imag5 from '../iceram/Triple Delight Banana Split.jpeg';



const MilkShake = ({name}) => {
  const img = [
    {
      title: 'Image',
      image: imag4,
      rate: 200,
      mrate:400
    },
    {
      title: 'Image',
      image: imag3,
    },
    {
      title: 'Image',
      image: imag2,
    },
    {
      title: 'Image',
      image: imag5,
    },
    {
      title: 'Image',
      image: imag5,
    },
    {
      title: 'Image',
      image: imag1,
    },
  ];

  return (
    <div className="row ">
      <h2>{}</h2>
      <div className="row__posters      ">
        {img.map(movie => (
          <>
          
           
           <img
            key={movie.id}
            className={'row__posterLarge m-3 rounded-lg  w-50 h-100 '}
            src={movie.image}
            alt={movie.name}
            />
            <b>
              <div className="flex flex-col m-1 text-center mt-25 mr-3  p-2 rounded-lg border-r-1">
                <b className="  text-2xl ">🔛{movie.title}</b>
                <b className="pt-2 text-sm">⭐⭐⭐⭐</b>


                    <b className="p-1 pt-5 text-xl">₹{movie.rate}💴</b>
                    <b className="p-1 pt-5 line-through">₹{movie.mrate}💰</b>
                  </div>
                </b>
          </>
         
        ))}
       
      </div>
      


    </div>
  );
};

export default MilkShake;
