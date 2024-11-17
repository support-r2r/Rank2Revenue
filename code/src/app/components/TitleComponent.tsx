interface TitleComponentProps {
    title: string;
    subtitle: string;
  }
  
  const TitleComponent: React.FC<TitleComponentProps> = ({ title, subtitle }) => {
    return (
      <section className="bg-gray-50 py-10 mt-12">
        <div className="mx-auto max-w-screen-xl text-center">
          <h1 className="text-3xl font-extrabold text-black sm:text-5xl"> {/* Black text */}
            {title}
            <strong className="font-extrabold text-blue-700 sm:block"> {/* Blue text */}
              {subtitle}
            </strong>
          </h1>
        </div>
      </section>
    );
  };
  
  export default TitleComponent;
  