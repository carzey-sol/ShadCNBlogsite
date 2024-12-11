import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const HeroRight = () => {
  return (
    <div>
      <h1 className="font-bold p-2">Browse Categories</h1>
      <div className="grid grid-cols-3 gap-2">
        <Button variant="outline">Category 1</Button>
        <Button variant="outline">Category 2</Button>
        <Button variant="outline">Category 3</Button>
        <Button variant="outline">Category 4</Button>
        <Button variant="outline">Category 5</Button>
        <Button variant="outline">Category 6</Button>
        <Button variant="outline">Category 7</Button>
        <Button variant="outline">Category 8</Button>
      </div>
      
      <h1 className="font-bold p-2">Top Posts</h1>
      
      {/* Use a native div to debug scroll */}
     
      <div className="h-[400px] overflow-y-auto rounded-md border p-4">
      <div className="flex flex-col gap-2">
          <Card>
            <CardHeader>
              <CardTitle>Blog Title</CardTitle>
              <CardDescription>Blog Description</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <p>Views</p>
              <p className="font-bold">Author</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Blog Title</CardTitle>
              <CardDescription>Blog Description</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <p>Views</p>
              <p className="font-bold">Author</p>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Blog Title</CardTitle>
              <CardDescription>Blog Description</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <p>Views</p>
              <p className="font-bold">Author</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HeroRight;
