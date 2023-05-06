import React from 'react'
import Create from './Create';
import Sidebar from './Sidebar'
import View from './View';
const HomeBlog = () => {
    // const [path, setpath] = useState();
    const path = window.location.pathname;
    // setpath(window.location.pathname);
    console.log(path)
  return (
    <>
    <div className="admin-container">
<Sidebar></Sidebar>


<div className="block-container">
{path === "/blogs/Home" ? "<h1>Hello</h1>"  : null}
{path === "/blogs/create" ? <Create />  : null}
{path === "/blogs/View" ? <View />  : null}
</div>
</div>
    </>
  )
}

export default HomeBlog