export function SystemsDiagram() {
  return (
    <div className="systems-diagram" aria-label="Data and AI workflow ending in human review" role="img">
      <div className="diagram-inputs">
        <span>Databases</span>
        <span>APIs</span>
        <span>Files</span>
        <span>Streams</span>
      </div>
      <div className="diagram-node">
        <small>Data engineering</small>
        <b>Ingest</b><b>Clean</b><b>Transform</b><b>Model</b>
      </div>
      <div className="flow-arrow">→</div>
      <div className="diagram-node active">
        <small>AI reasoning layer</small>
        <div className="network-mark" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <b>Ground</b><b>Evaluate</b><b>Guard</b>
      </div>
      <div className="flow-arrow">→</div>
      <div className="diagram-node">
        <small>Applications</small>
        <b>Automations</b><b>Dashboards</b><b>Alerts</b>
      </div>
      <div className="flow-arrow">→</div>
      <div className="human-node">
        <small>Human review</small>
        <span className="human-icon" aria-hidden="true" />
        <b>Verify · Approve · Refine</b>
      </div>
      <span className="feedback-line">Feedback loop</span>
    </div>
  );
}
