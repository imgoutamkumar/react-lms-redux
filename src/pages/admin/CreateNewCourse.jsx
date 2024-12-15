import Course from "@/components/admin/createNewCourse/Course";
import Curriculum from "@/components/admin/createNewCourse/Curriculum";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

const CreateNewCourse = () => {
  const { register, control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      title: "",
      category: "",
      level: "",
      primaryLanguage: "",
      subtitle: "",
      description: "",
      pricing: "",
      objectives: "",
      welcomeMessage: "",
      image: "",
      lectures: [{ title: "", isPreview: false, videoUrl: "", public_id: "" }], // Dynamic fields in the child
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="h-full w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-full flex flex-col bg-red-50 h-full">
          <CardHeader>
            <CardTitle>Create New Course</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="course">
              <TabsList>
                <TabsTrigger value="course">Course</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="extra">Extra</TabsTrigger>
              </TabsList>
              <TabsContent value="course">
                <Course register={register} control={control} />
              </TabsContent>
              <TabsContent value="curriculum">
                <Curriculum
                  control={control}
                  register={register}
                  setValue={setValue}
                />
              </TabsContent>
              <TabsContent value="extra">add extra things here</TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default CreateNewCourse;
