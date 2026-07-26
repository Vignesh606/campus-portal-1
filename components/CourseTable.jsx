export default function CourseTable({ semester }) {
  return (
    <div className="panel">
      <div className="panel-header">CURRENT SEMESTER COURSE REGISTRATION DETAILS</div>
      <div className="semester-banner">{semester.label}</div>
      <div className="course-table-wrap">
        <table className="course-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Code - Course Name</th>
              <th>Type</th>
              <th>Attendance</th>
              <th>Remarks</th>
            </tr>
          </thead>
          <tbody>
            {semester.courses.map((c, i) => (
              <tr key={c.id}>
                <td>{i + 1}</td>
                <td><strong>{c.code}</strong> &nbsp;-&nbsp; {c.name}</td>
                <td className="type-badge">{c.type}</td>
                <td className={`attendance-val ${c.level}`}>{c.attendance.toFixed(1)}</td>
                <td className={`remark ${c.level}`}>{c.remark}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
