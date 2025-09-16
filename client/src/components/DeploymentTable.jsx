function DeploymentTable({ deployments }) {
    return (
        <table className="deployments-table">
            <thead>
                <tr>
                    <th>Project</th>
                    <th>Status</th>
                    <th>Deployment ID</th>
                    <th>Timestamp</th>
                </tr>
            </thead>
            <tbody>
                {deployments.map((deployment, index) => (
                    <tr key={index}>
                        <td>{deployment.project}</td>
                        <td>
                            <span className={`status-badge status-${deployment.status}`}>
                                {deployment.statusDisplay}
                            </span>
                        </td>
                        <td>{deployment.id}</td>
                        <td>{deployment.timestamp}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default DeploymentTable;