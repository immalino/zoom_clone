import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const time = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
  }).format(new Date());

  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold">
        <div className="bg-hero h-[300px] w-full rounded-[2px] bg-cover">
          <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
            <h2 className="glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal">
              Upcoming Meeting at 10:00 AM
            </h2>
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
              <p className="text-sky-1 text-lg font-medium lg:text-2xl">
                {date}
              </p>
            </div>
          </div>
        </div>
      </h1>

      <MeetingTypeList />
    </section>
  );
};
export default Home;
