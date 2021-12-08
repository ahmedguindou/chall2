function Proj (){
    const arr = [{title:'Project1',img:"https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg"},{title:'Project2',img:"https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg"},{title:'Project3',img:"https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg"},{title:'Project4',img:"https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg"},{title:'Project5',img:"https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg"},{title:'Project6',img:'https://flxt.tmsimg.com/assets/p12922738_b1t_v9_aa.jpg'}]
    return(
    
        <>

        <section className="projects-section">
        {arr.map(el=>        <div className="project">
          <img
            src={el.img}
            style = {{width:" 360px" , height: "208"}}
          />
          <h3>{el.title}</h3>
          <p>
            Explore how budgetary constraints affect <br />
            creativity–for better or worse–in our Webby <br />
            Award-winning original series.
          </p>
          <a href="#"> Explore & learn more</a><br />
        </div>
)}

      </section>
    </>
    )
}
export default Proj ; 