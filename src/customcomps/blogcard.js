import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
import Image from "next/image"

  
  const BlogCard = () => {
    return (
      <div className="flex justify-center">
        {/* Center the card horizontally */}
        <Card className="w-[300px]"> {/* Set width of the card */}
          <CardHeader>
            <CardTitle>Blog Title</CardTitle>
            <CardDescription>Blog Description</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            {/* Div controlling the image width */}
            <div className="w-[500px] h-[300px]">
            <Image src="/images/MainAfter.jpg" alt="image" 
            width={400} 
            height={300}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      </div>
    )
  }
  
  export default BlogCard
  