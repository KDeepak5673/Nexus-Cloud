import React from 'react'
import ProjectCard from '../components/ProjectCard'
import DeploymentTable from '../components/DeploymentTable'

function DashboardPage() {
  const projects = [
    {
      title: "E-commerce Store",
      description: "Next.js e-commerce application with Stripe integration",
      environment: "Production",
      lastDeployed: "2h ago"
    },
    {
      title: "Personal Blog",
      description: "Blog built with Gatsby and Contentful CMS",
      environment: "Preview",
      lastDeployed: "1d ago"
    },
    {
      title: "Company Website",
      description: "Corporate website with React and Tailwind CSS",
      environment: "Production",
      lastDeployed: "3d ago"
    },
    {
      title: "Documentation Site",
      description: "Technical documentation with MDX and Next.js",
      environment: "Preview",
      lastDeployed: "5d ago"
    }
  ]

  const deployments = [
    {
      project: "E-commerce Store",
      status: "ready",
      statusDisplay: "READY",
      id: "dep_1a2b3c4d",
      timestamp: "10 minutes ago"
    },
    {
      project: "Personal Blog",
      status: "prog",
      statusDisplay: "PROGRESS",
      id: "dep_5e6f7g8h",
      timestamp: "25 minutes ago"
    },
    {
      project: "Company Website",
      status: "queue",
      statusDisplay: "QUEUED",
      id: "dep_9i0j1k2l",
      timestamp: "1 hour ago"
    },
    {
      project: "Documentation Site",
      status: "fail",
      statusDisplay: "FAILED",
      id: "dep_3m4n5o6p",
      timestamp: "2 hours ago"
    }
  ]

  return (
    <section className="dashboard-preview">
      <div className="container">
        <div className="dashboard-header">
          <div className="section-header">
            <h2>Your Projects</h2>
            <p>All your deployed projects in one place</p>
          </div>
          <a href="#" className="btn btn-primary">New Project</a>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <h3 style={{marginTop: "60px", marginBottom: "20px"}}>Recent Deployments</h3>
        <DeploymentTable deployments={deployments} />
      </div>
    </section>
  )
}

export default DashboardPage