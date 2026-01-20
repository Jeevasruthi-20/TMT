import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/react/button';
import MeasurementGuide from '@/components/features/MeasurementGuide';
import MeasurementForm from '@/components/forms/MeasurementForm';

export default function PantsMeasurementPage() {
  const measurements = [
    {
      name: 'Waist',
      instruction: 'Measure around your natural waistline where you normally wear your pants. The tape should be snug but comfortable.',
    },
    {
      name: 'Hip',
      instruction: 'Measure around the fullest part of your hips and buttocks, keeping the tape parallel to the floor. This is typically 7-9 inches below your waist, at the widest point of your hips. The tape should wrap around the fullest part of your buttocks and hips.',
    },
    {
      name: 'Inseam',
      instruction: 'Measure from the crotch seam down to where you want the pants to end (usually at your ankle bone). This is best done on a pair of well-fitting pants.',
    },
    {
      name: 'Outseam',
      instruction: 'Measure from your waistline down the outside of your leg to where you want the pants to end.',
    },
    {
      name: 'Thigh',
      instruction: 'Measure around the fullest part of your thigh, about 2-3 inches below the crotch.',
    },
    {
      name: 'Bottom Opening',
      instruction: 'Measure the circumference of the leg opening where the pants will end at your ankle.',
    },
  ];

  const formFields = [
    { name: 'waist', label: 'Waist', required: true },
    { name: 'hip', label: 'Hip', required: true },
    { name: 'inseam', label: 'Inseam', required: true },
    { name: 'outseam', label: 'Outseam', required: true },
    { name: 'thigh', label: 'Thigh', required: true },
    { name: 'knee', label: 'Knee' },
    { name: 'bottomOpening', label: 'Bottom Opening', required: true },
    { name: 'rise', label: 'Rise (Front)' },
  ];

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/5 py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <Link to="/stitching">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Button>
          </Link>
          <div className="max-w-3xl">
            <h1 className="font-serif font-bold text-3xl lg:text-4xl text-foreground mb-4">
              Pants Measurements
            </h1>
            <p className="text-muted-foreground text-lg">
              Get perfectly fitted pants with our comprehensive measurement guide
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-12 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Measurement Guide */}
          <div>
            <h2 className="font-serif font-bold text-2xl text-foreground mb-6">
              How to Measure
            </h2>
            <img
    src="/images/measurement.jpg"
    alt="Chudi measurement guide"
    className="rounded-lg mb-6 w-full object-cover shadow-md"
  />
            <MeasurementGuide measurements={measurements} />
          </div>

          {/* Measurement Form */}
          <div>
            <h2 className="font-serif font-bold text-2xl text-foreground mb-6">
              Submit Your Measurements
            </h2>
            <div className="bg-white rounded-xl shadow-lg border p-6 lg:p-8 sticky top-24">
              <MeasurementForm garmentType="Pants" fields={formFields} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

