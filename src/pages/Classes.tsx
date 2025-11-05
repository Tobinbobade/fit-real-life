import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import trainingImg from "@/assets/class-training.jpg";
import yogaImg from "@/assets/class-yoga.jpg";
import cyclingImg from "@/assets/class-cycling.jpg";

const Classes = () => {
  const classes = [
    {
      name: "HIIT Training",
      image: trainingImg,
      duration: "45 min",
      level: "Intermediate",
      description: "High-intensity interval training for maximum calorie burn",
      schedule: ["Mon 6am", "Wed 6pm", "Fri 6am"],
    },
    {
      name: "Yoga Flow",
      image: yogaImg,
      duration: "60 min",
      level: "All Levels",
      description: "Mindful movement and breath work for flexibility and peace",
      schedule: ["Tue 7am", "Thu 7am", "Sat 9am"],
    },
    {
      name: "Spin Cycle",
      image: cyclingImg,
      duration: "50 min",
      level: "All Levels",
      description: "High-energy cycling class with motivating music",
      schedule: ["Mon 7pm", "Wed 7pm", "Fri 7pm"],
    },
    {
      name: "Strength & Power",
      image: trainingImg,
      duration: "60 min",
      level: "Advanced",
      description: "Build muscle and increase strength with progressive overload",
      schedule: ["Tue 6pm", "Thu 6pm", "Sat 10am"],
    },
    {
      name: "Boxing Bootcamp",
      image: trainingImg,
      duration: "55 min",
      level: "Intermediate",
      description: "Combat-inspired workout combining cardio and strength",
      schedule: ["Mon 8am", "Wed 8am", "Fri 8am"],
    },
    {
      name: "Pilates Core",
      image: yogaImg,
      duration: "45 min",
      level: "All Levels",
      description: "Core-focused exercises for stability and posture",
      schedule: ["Tue 9am", "Thu 9am", "Sun 10am"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Our Classes</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the perfect class to match your fitness goals and schedule
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {classes.map((classItem, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={classItem.image}
                    alt={classItem.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge variant="secondary" className="bg-background/90">
                      {classItem.duration}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{classItem.name}</h3>
                    <Badge variant="outline" className="border-primary text-primary">
                      {classItem.level}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{classItem.description}</p>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Schedule:</p>
                    <div className="flex flex-wrap gap-2">
                      {classItem.schedule.map((time, idx) => (
                        <Badge key={idx} variant="secondary">
                          {time}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Classes;
