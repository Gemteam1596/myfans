function GoalTracker() {
  return (
    <div className="dashboard-box">
      <h4 className="mb-4">🎯 Monthly Goal</h4>

      <h2>$7,500</h2>

      <p>Target: $10,000</p>

      <div className="goal-bar">
        <div className="goal-progress"></div>
      </div>

      <small>75% Completed</small>
    </div>
  );
}

export default GoalTracker;