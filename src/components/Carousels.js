
import React from "react";
import { useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarousel, fetchComics } from "../redux/actions";
import CarouselItem from "./CarouselItem";

const Carousels = () => {
  const data = useSelector((state) => state?.comics?.comicsArr);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComics(6,0,"thisWeek",null));
  }, []);
  console.log(data)
  return (
    <Carousel navButtonsAlwaysVisible={false} cycleNavigation={true} animation="slide"duration={600} >
      {data.slice(0,6)?.map((item, i) => (
        <CarouselItem key={item.id} item={item} />
      ))}
    </Carousel>

  );
};
export default Carousels;
