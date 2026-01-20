import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/react/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/react/tabs';
import OnlineClassForm from '@/components/forms/OnlineClassForm';
import OfflineClassForm from '@/components/forms/OfflineClassForm';
import { Scissors, Sparkles, Heart } from 'lucide-react';

export default function ClassesPage() {
  const classes = [
    {
      id: 'tailoring',
      title: 'Tailoring Classes',
      description: 'Master garment construction, pattern making, and professional tailoring techniques',
      icon: Scissors,
      color: 'from-primary to-amber-600',
      features: [
        'Basic to advanced stitching techniques',
        'Pattern making and design',
        'Garment construction',
        'Professional finishing methods',
      ],
      duration: '3 months',
      // Image 9: Women working at sewing machines
      image: '/images/tailoring.jpg',
    },
    {
      id: 'aari',
      title: 'Aari Work Classes',
      description: 'Learn traditional South Indian embroidery with the aari needle',
      icon: Sparkles,
      color: 'from-secondary to-teal-600',
      features: [
        'Traditional aari techniques',
        'Bead and sequin work',
        'Design creation',
        'Bridal and occasion wear embroidery',
      ],
      duration: '2 months',
      // Image 8: Red fabric with gold embroidery and bird motif
      image: '/images/aari.jpg',
    },
    {
      id: 'embroidery',
      title: 'Embroidery Classes',
      description: 'Create beautiful hand-embroidered designs and intricate patterns',
      icon: Heart,
      color: 'from-pink-500 to-rose-600',
      features: [
        'Various embroidery stitches',
        'Thread work techniques',
        'Design planning',
        'Contemporary and traditional patterns',
      ],
      duration: '2 months',
      // Image 7: Fuchsia pink aari blouse
      image: '/images/embroidery.jpg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/5 to-accent py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-foreground mb-6">
              Our Classes
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Learn traditional crafts from expert instructors with flexible online and offline options
            </p>
          </div>
        </div>
      </section>

      {/* Classes Overview */}
      <section className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {classes.map((classItem) => {
            const Icon = classItem.icon;
            return (
              <Card key={classItem.id} className="hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={classItem.image}
                    alt={classItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${classItem.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="font-serif text-xl">{classItem.title}</CardTitle>
                  <CardDescription>{classItem.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-semibold text-primary">Duration:</span>
                      <span className="text-muted-foreground">{classItem.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {classItem.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enrollment Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl text-foreground mb-4">
              Enroll Now
            </h2>
            <p className="text-muted-foreground">
              Choose your preferred learning mode and select a class to get started
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-6 lg:p-8">
              <Tabs defaultValue="online" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="online" className="text-base">Online Classes</TabsTrigger>
                  <TabsTrigger value="offline" className="text-base">Offline Classes</TabsTrigger>
                </TabsList>
                
                <TabsContent value="online" className="space-y-6">
                  <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Online Classes:</span> Join from anywhere with live interactive sessions. Select your preferred time slot and we'll confirm your schedule.
                    </p>
                  </div>
                  <OnlineClassForm classes={classes} />
                </TabsContent>
                
                <TabsContent value="offline" className="space-y-6">
                  <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4 mb-6">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Offline Classes:</span> Attend in-person sessions at our center. Submit your details and we'll contact you with available schedules.
                    </p>
                  </div>
                  <OfflineClassForm classes={classes} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

