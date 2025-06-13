import { motion } from 'framer-motion';
import { Card, Row, Col, Typography } from 'antd';
import { Code2, GraduationCap, Award } from 'lucide-react';
const { Title, Paragraph, Text } = Typography;
const About = () => {
  const skills = [
    'React.js',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Git',
    'Responsive Design',
  ];

  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
          <p className="text-xl text-gray-600">React Developer | BCA Graduate</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-xl">
              <img
                src="manan.jpg"
                alt="Manan Tejani"
                className="w-full h-110 object-cover"
              />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who I Am</h2>
              <p className="text-gray-600 leading-relaxed">
                I am Manan Tejani, a passionate React Developer who recently completed one year of training at TOPS Technologies in Ahmedabad.
                I am enthusiastic about creating modern, responsive, and user-friendly web applications. As a fresh graduate,
                I am eager to apply my skills and knowledge in a professional environment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">My Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                During my training at TOPS Technologies, I gained hands-on experience in developing web applications using React.js
                and modern web technologies. I am currently open to work and looking for opportunities to grow as a developer
                while contributing to meaningful projects.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

      </div>
      <div className="mx-8 grid gap-6 grid-cols-1 lg:grid-cols-3 mt-10">
        {/* Skills Card */}
        <Card
          className="shadow-xl border-none"
          style={{
            background: 'linear-gradient(to right, #667eea, #764ba2)',
            color: 'white',
          }}
        >
          <Title level={4} className="flex items-center mb-4 text-white">
            <Code2 className="mr-2" /> Skills
          </Title>
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12}>
              <Text strong className="text-white">Frontend:</Text>
              <Paragraph className="text-white">HTML5, CSS3, JavaScript, Bootstrap,TailwindCss React.js</Paragraph>
              <Text strong className="text-white">Backend:</Text>
              <Paragraph className="text-white">learning Node.js, Express.js</Paragraph>
              <Text strong className="text-white">Database:</Text>
              <Paragraph className="text-white">MySQL <br></br>(learning MongoDB & PostgreSQL)</Paragraph>
            </Col>
            <Col xs={24} sm={12}>
              <Text strong className="text-white">Version Control:</Text>
              <Paragraph className="text-white">GitHub</Paragraph>
              <Text strong className="text-white ">Languages:</Text>
              <Paragraph className="text-white">English, Hindi, Gujarati</Paragraph>
              <Text strong className="text-white">Soft Skills:</Text>
              <Paragraph className="text-white">Continuous Learning <br></br>Team Collaboration<br></br> Time Management</Paragraph>
            </Col>
          </Row>
        </Card>

        {/* Education Card */}
        <Card
          className="shadow-xl border-none"
          style={{
            background: 'linear-gradient(to right,rgb(102, 139, 150),rgb(104, 158, 224))',
            color: 'white',
          }}
        >
          <Title level={4} className="flex items-center mb-4 text-white">
            <GraduationCap className="mr-2" /> Education
          </Title>
          <div className="mb-4">
            <Text strong className="text-white">Bachelor of Computer Applications (B.C.A)</Text>
            <Paragraph className="text-white">Maharaja Krishnakumarsinhji Bhavnagar University – 2024</Paragraph>
            <Paragraph className="text-white">CGPA: 6.35 / 10 (63.46%)</Paragraph>
          </div>
          <div>
            <Text strong className="text-white">12th Commerce</Text>
            <Paragraph className="text-white">GSHSEB – 2021</Paragraph>
            <Paragraph className="text-white">Percentage: 74%</Paragraph>
          </div>
        </Card>

        {/* Certifications Card */}
        <Card
          className="shadow-xl border-none"
          style={{
            background: 'linear-gradient(to right,rgb(105, 100, 193),rgb(136, 122, 206))',
            color: 'white',
          }}
        >
          <Title level={4} className="flex items-center mb-4 text-white">
            <Award className="mr-2" /> Certifications
          </Title>
          <ul style={{color:"black"}} className="list-disc pl-6 text-white">
            <li>MERN Stack Developer Training – Tops Technologies (Ongoing)</li>
            
          </ul>
        </Card>
      </div>

    </div>
  );
};

export default About; 