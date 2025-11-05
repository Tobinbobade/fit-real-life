import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";

const Trainers = () => {
  const trainers = [
    {
      name: "Marcus Johnson",
      image: trainer1,
      role: "Head Strength Coach",
      specialties: ["Strength Training", "Powerlifting", "Athletic Performance"],
      bio: "15+ years of experience transforming athletes and everyday people into their strongest selves.",
    },
    {
      name: "Sarah Mitchell",
      image: trainer2,
      role: "HIIT & Cardio Specialist",
      specialties: ["HIIT", "Boxing", "Weight Loss"],
      bio: "Former professional athlete with a passion for high-intensity training and motivation.",
    },
    {
      name: "David Chen",
      image: trainer3,
      role: "Yoga & Mobility Expert",
      specialties: ["Yoga", "Flexibility", "Recovery"],
      bio: "Certified yoga instructor helping clients find balance between strength and flexibility.",
    },
    {
      name: "Jessica Martinez",
      image: trainer4,
      role: "Nutrition & Wellness Coach",
      specialties: ["Nutrition", "Body Composition", "Lifestyle Coaching"],
      bio: "Holistic approach to fitness combining training, nutrition, and sustainable habits.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4">Meet Our Trainers</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert coaches dedicated to helping you achieve your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {trainers.map((trainer, index) => (
              <Card
                key={index}
                className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)]"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 relative overflow-hidden">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="w-full h-64 md:h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="md:w-2/3 p-6">
                    <h3 className="text-2xl font-bold mb-1">{trainer.name}</h3>
                    <p className="text-primary font-medium mb-3">{trainer.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{trainer.bio}</p>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Specialties:</p>
                      <div className="flex flex-wrap gap-2">
                        {trainer.specialties.map((specialty, idx) => (
                          <Badge key={idx} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
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

export default Trainers;
