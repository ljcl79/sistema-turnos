
import { useContext, useEffect } from 'react';
import Banner from '../components/Banner';
import { AppContext } from '../context/GlobalState';
import HeroServices from '../services/HeroService';
import GalleryServices from '../services/GalleryService';
import MainGallery from '../components/MainGallery';
import TestimonialServices from '../services/TestimonialService';
import Testimonials from '../components/Testimonials';


const Home = () => {
    const { state, setState } = useContext(AppContext);



    useEffect(() => {
        const getHeroData = async () => {
            const data = await HeroServices.getHeroContent(state.lstCfg['API_URL']);
            if (data.success) {
                setState(prev => ({ ...prev, lstHero: data.lista ?? [] }))
            } else {
                //setError(data.message)
            }
        }

        const getGalleryData = async () => {
            const data = await GalleryServices.getGalleryContent(state.lstCfg['API_URL']);
            if (data.success) {
                setState(prev => ({ ...prev, lstGalleryServices: data.lista ?? [] }))
            } else {
                //setError(data.message)
            }
        }

        const getTestimonialData = async () => {
            const data = await TestimonialServices.getTestimonialContent(state.lstCfg['API_URL']);
            if (data.success) {
                setState(prev => ({ ...prev, lstTestimonials: data.lista ?? [] }))
            } else {
                //setError(data.message)
            }
        }

        getHeroData();
        getGalleryData();
        getTestimonialData();

    }, []);




    return (
        <>
            <Banner></Banner>
            <MainGallery></MainGallery>
            <div className='mt-10 px-5'>
                <Testimonials></Testimonials>
            </div>
        </>
    )
}

export default Home