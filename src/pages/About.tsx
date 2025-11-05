import { Card } from "@/components/ui/card";
import { Award, Heart, Target, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about helping you achieve your fitness goals and transform your life.",
    },
    {
      icon: Target,
      title: "Results",
      description: "Data-driven programs designed to deliver measurable, sustainable results.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join a supportive community that motivates and inspires each other daily.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "World-class facilities, equipment, and trainers dedicated to your success.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">About Apex Fitness</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Founded in 2015, Apex Fitness has been transforming lives through innovative training programs, 
              expert coaching, and a community-driven approach to health and wellness.
            </p>
          </div>

          {/* Story Section */}
          <div className="max-w-4xl mx-auto mb-20">
            <Card className="p-8 md:p-12 bg-card border-border">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  What started as a single personal training studio has evolved into a premier fitness 
                  destination serving over 5,000 members. Our founders, professional athletes and certified 
                  trainers, wanted to create a space where everyone—from beginners to elite athletes—could 
                  push their limits and achieve the impossible.
                </p>
                <p>
                  We believe fitness is not just about physical transformation. It's about building confidence, 
                  developing mental resilience, and creating lasting lifestyle changes. Every program, class, 
                  and service we offer is designed with this holistic philosophy in mind.
                </p>
                <p>
                  Today, Apex Fitness stands as a testament to what's possible when passion meets purpose. 
                  Our state-of-the-art facility, expert team, and vibrant community continue to set the 
                  standard for fitness excellence.
                </p>
              </div>
            </Card>
          </div>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="p-6 bg-secondary border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] text-center group"
                >
                  <value.icon className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-gradient-to-br from-primary/20 to-background rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-12">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-muted-foreground">Active Members</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Weekly Classes</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">25</div>
                <div className="text-muted-foreground">Expert Trainers</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">9</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
