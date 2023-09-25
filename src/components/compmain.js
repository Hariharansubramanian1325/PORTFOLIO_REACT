function ComponentMain(){
    return(
        <>
        <div className="context">
            <table >
                <tr>
                    <td><a>Projects</a></td>
                    <td><a> About Me</a></td>
                    <td><a>Contact Me</a></td>
                </tr>
            </table>
        </div>
    <br/>
    
    <div className="row2">
        <h1>PROJECTS/EXPERIENCE</h1>
    </div>
    <div className="row3">
        <div className="card">
            <img src="assets/farm.jpeg" alt="Avatar" width='100%' />
            <div className="container">
              <h4><b>AI-DRIVEN FARMING</b></h4> 
              <p>Automated agriculture using IoT and ML</p> 
            </div>
          </div>
          <div className="card">
            <img src="assets/movie.jpeg" alt="Avatar"  width='100%' />
            <div className="container">
              <h4><b>MOVIE RECOMMENDATION</b></h4> 
              <p>User specific movie recommendation</p> 
            </div>
          </div>
          <div className="card">
            <img src="assets/amb.jpeg" alt="Avatar"  width='100%' />
            <div className="container">
              <h4><b>AMPCONEKT</b></h4> 
              <p>Ambulance booking app</p> 
            </div>
          </div>
    </div>
    <br/>
        </>
    )
};
export default ComponentMain;