function CourseCard({ icon: Icon, heading, body }) {
  return (
    <div className="flex gap-5 w-75 justify-between p-10 items-center rounded-xl bg-slate-800 w-full">
      <div className="flex items-center">
        <Icon className="h-15 w-15 aspect-square mr-5" />
        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold">{heading}</h3>
          <p>{body}</p>
        </div>
      </div>
      <button className="bg-green-600 px-4 py-3 rounded-lg">Open Course</button>
    </div>
  );
}

export default CourseCard;
