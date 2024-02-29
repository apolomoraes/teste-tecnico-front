import Rating from "../_components/rating";
import TableContent from "../_components/table-content";

const Home = () => {
  return ( 
    <main >
      <div className="h-screen w-full flex justify-center items-center">
        <table className="flex flex-col md:w-[90%]">
          <thead className="rounded-t-lg md:bg-gray-100 md:py-6 md:px-3">
            <tr className="hidden md:flex justify-between md:w-full z-50">
              <th className="text-gray-500 text-xs uppercase">car</th>
              <th className="text-gray-500 text-xs uppercase w-fit">next reservation</th>
              <th className="text-gray-500 text-xs uppercase">status</th>
              <th className="text-gray-500 text-xs uppercase">rating</th>
              <th className="text-gray-500 text-xs uppercase">actions</th>
            </tr>
          </thead>
          <tbody className="flex flex-col gap-2 md:block md:w-full md:border md:rounded-es-md md:rounded-e-md md:border-gray-50">
            <TableContent rating={1} available={true}/>
            <TableContent rating={3} available={false}/>
            <TableContent rating={2} available={true}/>
            <TableContent rating={4} available={true}/>
            <TableContent rating={5} available={false}/>
          </tbody>          
        </table>
      </div>
    </main>
  );
}
 
export default Home;