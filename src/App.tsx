import './App.css'
import LessonPlannerPage from "./pages/LessonPlannerPage.tsx";
import SidebarComponent from "./components/SidebarComponent/SidebarComponent.tsx";
import ReturnToLessonPlannerMainComponent
    from "./components/ReturnToLessonPlannerMainComponent/ReturnToLessonPlannerMainComponent.tsx";


function App() {


  return (
      <div className="flex min-h-screen bg-gray-100">
          <SidebarComponent/>

          <div className="flex flex-col flex-1 items-center bg-gray-100">
              <ReturnToLessonPlannerMainComponent/>

              <div className="flex-1 w-full flex justify-center items-center px-4">
                  <LessonPlannerPage/>
              </div>
          </div>
      </div>
  )
}

export default App
