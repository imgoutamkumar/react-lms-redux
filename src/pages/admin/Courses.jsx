import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Courses = () => {
  const navigate = useNavigate();

  const handleNewCourseButton = () => {
    navigate("/admin/create-new-course");
  };

  return (
    <div className="w-full h-full">
      <Card>
        <CardHeader className="flex flex-row w-full items-center justify-between p-4">
          <CardTitle>All Courses</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default Courses;
