import { Link } from 'react-router-dom';
import { Button } from '@/components/react/button';
import { Card, CardContent } from '@/components/react/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/react/carousel';
import { GraduationCap, Scissors, Sparkles, Users, Award, Heart } from 'lucide-react';

export default function HomePage() {
  const classes = [
    {
      title: 'Tailoring Classes',
      description: 'Master the art of garment construction and pattern making',
      icon: Scissors,
      color: 'from-primary to-amber-600',
    },
    {
      title: 'Aari Work',
      description: 'Learn traditional South Indian embroidery techniques',
      icon: Sparkles,
      color: 'from-secondary to-teal-600',
    },
    {
      title: 'Embroidery',
      description: 'Create beautiful hand-embroidered designs and patterns',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
    },
  ];

  const stitchingServices = [
    {
      title: 'Chudi',
      image: '/images/chudi.jpg',
      path: '/stitching/chudi',
    },
    {
      title: 'Pants',
      image: '/images/pants.jpg',
      path: '/stitching/pants',
    },
    {
      title: 'Blouse',
      image: '/images/blouse.jpg',
      path: '/stitching/blouse',
    },
    {
      title: 'Skirts',
      image: '/images/skirts.jpg',
      path: '/stitching/skirts',
    },
    {
      title: 'Frock',
      image: '/images/frock.jpg',
      path: '/stitching/frock',
    },
    {
      title: 'Lehenga',
      image: '/images/lehenga.jpg',
      path: '/stitching/lehenga',
    },
    {
      title: 'Traditional Top & Skirt',
      image: '/images/traditional-top-skirt.jpg',
      path: '/stitching/traditional-top-skirt',
    },
  ];

  const features = [
    {
      icon: Users,
      title: 'Expert Instructors',
      description: 'Learn from experienced professionals',
    },
    {
      icon: Award,
      title: 'Quality Craftsmanship',
      description: 'Perfect fit and premium finishing',
    },
    {
      icon: GraduationCap,
      title: 'Flexible Learning',
      description: 'Online and offline options',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent overflow-hidden">
        <div className="absolute inset-0 bg-embroidery-pattern"></div>
        <div className="container mx-auto px-4 py-12 lg:py-16 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-medium text-primary shadow-sm">
                  <Sparkles className="h-4 w-4" />
                  Empowering Women Through Craft
                </span>
              </div>
              <h1 className="font-serif font-bold text-4xl lg:text-6xl leading-tight text-foreground">
                Master Traditional Crafts & Get Perfect Fits
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Join our professional classes in Tailoring, Aari Work, and Embroidery, or get custom-stitched garments with precise measurements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/classes">
                  <Button size="lg" className="w-full sm:w-auto text-base px-8 shadow-lg hover:shadow-xl transition-shadow">
                    Explore Classes
                  </Button>
                </Link>
                <Link to="/stitching">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-base px-8">
                    Stitching Services
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/images/tailoring.jpg"
                alt="Tailoring workshop"
                className="rounded-2xl shadow-2xl w-full max-h-[520px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">
            Our Classes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Learn traditional crafts from expert instructors with flexible online and offline options
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {classes.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-serif font-semibold text-xl mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <Link to="/classes">
                    <Button variant="ghost" className="group-hover:bg-primary/10 w-full">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Stitching Services */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Custom Stitching Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get perfectly fitted garments with our professional measurement-based stitching. Swipe right to see more services!
            </p>
          </div>

          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: false,
              dragFree: true,
              containScroll: "trimSnaps",
            }}
          >
            <CarouselContent className="-ml-4">
              {stitchingServices.map((service, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4">
                  <Link to={service.path} className="group block">
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full">
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <h3 className="absolute bottom-4 left-4 font-serif font-semibold text-xl text-white">
                          {service.title}
                        </h3>
                      </div>
                      <CardContent className="p-4">
                        <Button variant="ghost" className="w-full group-hover:bg-primary/10">
                          Get Measurements
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 lg:-left-16" />
            <CarouselNext className="hidden md:flex -right-12 lg:-right-16" />
          </Carousel>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
                  <Icon className="h-10 w-10 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

