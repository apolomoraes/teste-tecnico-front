import Rating from "../_components/rating";
import TableContent from "../_components/table-content";

const Home = () => {
  return ( 
    <main>
      <div className="min-h-screen flex justify-center items-center">
        <table>
          <thead>
            <tr className="hidden md:flex gap-48">
              <th>car</th>
              <th>next reservation</th>
              <th>status</th>
              <th>rating</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-col gap-4">
              <TableContent />
            </tr>  
          </tbody>          
        </table>
      </div>
    </main>
  );
}
 
export default Home;