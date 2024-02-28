import Rating from "../_components/rating";

const Home = () => {
  return ( 
    <main>
      <div>
        <Rating rating={4} />
        <table>
          <thead>
            <tr className="hidden md:block">
              <th>car</th>
              <th>next reservation</th>
              <th>status</th>
            </tr>
          </thead>

          
        </table>
      </div>
    </main>
  );
}
 
export default Home;