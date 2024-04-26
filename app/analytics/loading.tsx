import { Loader } from "lucide-react";


const AnalyticsLoading = () => {
    return (  
        <div className="flex items-center justify-center h-full">
            <Loader className="animate-spin"/>
        </div>
    );
}
 
export default AnalyticsLoading;