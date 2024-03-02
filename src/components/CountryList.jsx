import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import Message from "./Message";

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return <Message message="Add your first city by clicking on the map" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else return arr;
  }, []);

  /*
  In the preceding code:

  [] --> is the initial value of reduce method, which is updated whenever a new value is returned.

  --If statement logic--
  1. Create a new array of just cities with the map method based on the current values in the accumulator(arr)
  2. Check if the new array includes the current(city) item of the array(cities) you are trying to reduce.

  - If step 1 & 2 are correct the condition is evaluated to TRUE, but the aim here is that we don't actually want it 
  to be TRUE initially(since the initial value of the array is an empty array) so it will negate(!) to false, which is
  actually what we want, so we can populate the accumulator(arr) with current value({ country: city.country, emoji: city.emoji }) from the array(cities)  being reduced that has not been added to the accumulator(arr). This new  array is then becomes the new value of the accummulator after it has been return.
  - We do this for every value in the array being reduced, until we have a brand new array with only countries via the reducer method.
  
  */

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
