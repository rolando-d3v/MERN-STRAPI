import Head from "next/head";
import Sidebar from "./Sidebar";

const Container = (props) => {
  return (
    <div>
      <Head>
        <title>Rolan</title>
      </Head>
      
      <section className="">
        <Sidebar />
        <div style={{marginLeft: '224px'}} className='overflow-auto'   onClick={()=> console.log('hola click')}  >{props.children}</div>
      </section>
    </div>
  );
};

export default Container;
