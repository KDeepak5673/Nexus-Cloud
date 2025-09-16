import HeroSection from '../components/HeroSection';
import ProjectCard from '../components/ProjectCard';
import StatCard from '../components/StatCard';

function HomePage() {
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
        }
    ];

    const stats = [
        { icon: "fas fa-rocket", value: "142", label: "Total Deployments" },
        { icon: "fas fa-check-circle", value: "128", label: "Successful Deployments" },
        { icon: "fas fa-exclamation-circle", value: "14", label: "Failed Deployments" }
    ];

    return (
        <>
            <HeroSection />
            
            <section className="dashboard-preview">
                <div className="container">
                    <div className="section-header">
                        <h2>Your Projects</h2>
                        <p>All your deployed projects in one place. Manage domains, view deployments, and monitor performance.</p>
                        <a href="#" className="btn btn-outline" onClick={() => window.appState.setPage('dashboard')}>View All Projects</a>
                    </div>
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="analytics-preview">
                <div className="container">
                    <div className="section-header">
                        <h2>Deployment Analytics</h2>
                        <p>Monitor your deployment status and track performance metrics.</p>
                        <a href="#" className="btn btn-outline" onClick={() => window.appState.setPage('analytics')}>View Detailed Analytics</a>
                    </div>
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <StatCard key={index} {...stat} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default HomePage;