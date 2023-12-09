import {v4} from 'uuid';

const ProjectList = ({project}) => {
  return (
    <div className="container__cards">
      {project.map(({ img, category }) => (
      <div className="image__container">  
        <img key={v4()} src={img} alt={category}/>
      </div>
      ))}
      
    </div>
  );
};

export default ProjectList;