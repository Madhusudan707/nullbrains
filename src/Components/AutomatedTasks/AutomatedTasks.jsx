

export const AutomatedTasks = () => {
    return (
        <div className="flex items-center justify-center space-x-16">
       
        <div className="flex flex-col ">
          <h2 className="text-3xl mb-4">Automated Tasks</h2>
          <div className="mb-8 text-gray-600">
            <p>Save time and money with our revolutionary</p>
            <p>services. We are the leaders in the industry</p>
          </div>
  
          <div className="flex flex-col space-y-3 text-gray-500">
            <div className="flex items-center">
              <span>
                <i className="bg-yellow-500 p-1  text-white fas fa-robot rounded-full  flex items-center justify-center border"></i>
              </span>
              <span className="  px-2">Automated task management workflow</span>
            </div>
            <div className="flex items-center">
              <span>
                <i className="bg-yellow-500 p-1  text-white fas fa-chart-line rounded-full  items-center justify-center border"></i>
              </span>
              <span className="  px-2">Detailed analytics for your data</span>
            </div>
            <div className="flex items-center">
              <span>
                <i className="bg-yellow-500 p-1  text-white fas fa-mortar-pestle rounded-full  flex items-center justify-center border"></i>
              </span>
              <span className=" px-2">Some awesome integrations</span>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/automated_tasks.png" alt="boost" />
        </div>
      </div>
    )
}
