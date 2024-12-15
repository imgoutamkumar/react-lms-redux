import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { CircleX, Plus } from "lucide-react";
import { useFieldArray } from "react-hook-form";
const Curriculum = ({ control, register }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "lectures", // Matches the key in parent's defaultValues
  });

  return (
    <Card className="w-full h-full">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="text-xl">Add Curriculums</CardTitle>
        <Button
          onClick={() =>
            append({ title: "", isPreview: false, videoUrl: "", public_id: "" })
          }
        >
          {" "}
          <Plus />
          Add Lecture
        </Button>
      </CardHeader>
      <CardContent>
        {fields.map((filed, index) => (
          <div
            key={index}
            className="relative max-w-4xl mx-auto p-4 md:p-8 border border-gray-400 rounded-lg my-4"
          >
            <div className="grid gap-6 mb-4 lg:grid-cols-2">
              <div className="lg:flex lg:justify-between lg:items-center">
                <label
                  htmlFor={`title_${index}`}
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                >
                  Lecture {index + 1}
                </label>
                <Input
                  type="text"
                  id={`title_${index}`}
                  name="title"
                  {...register(`lectures.${index}.title`)}
                  defaultValue={filed.name}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-[75%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="enter fullname"
                  required
                />
              </div>

              <div className="flex gap-3 items-center">
                <label
                  htmlFor={`isPreview_${index}`}
                  className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                >
                  Free Preview
                </label>
                <Switch
                  id={`isPreview_${index}`}
                  {...register(`lectures.${index}.isPreview`)}
                  // checked={filed.isPreview}
                  defaultValue={filed.isPreview}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor={`video_${index}`}
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
              >
                Upload Video
              </label>
              <Input
                type="file"
                accept="video/*"
                id={`video_${index}`}
                name="videoUrl"
                {...register(`lectures.${index}.videoUrl`)}
                defaultValue={filed.videoUrl}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required
              />
            </div>

            <CircleX
              className="absolute top-3 right-3 cursor-pointer"
              onClick={() => remove(index)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Curriculum;
