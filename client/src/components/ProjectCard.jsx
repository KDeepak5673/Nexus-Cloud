function ProjectCard({ title, description, environment, lastDeployed }) {
    const handleClick = () => {
        alert('Navigating to project details');
    };

    return (
        <div className="project-card" onClick={handleClick}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="project-meta">
                <span>{environment}</span>
                <span>Last deployed: {lastDeployed}</span>
            </div>
        </div>
    );
}

export default ProjectCard;