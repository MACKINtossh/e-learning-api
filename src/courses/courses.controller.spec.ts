// import { Test, TestingModule } from '@nestjs/testing';
// import { CoursesController } from './courses.controller';
// import { CoursesService } from './courses.service';
// import { Course } from './entities/course.entity';
// import { Quiz } from '../quizzes/entities/quiz.entity';
// import { User } from '../users/entities/user.entity';

// const mockQuiz = {
//   id: 1,
//   name: 'Quiz 1',
//   // ...
// };

// // Mocking a User object. Add more properties based on your User entity.
// const mockUser = {
//   id: 1,
//   name: 'User 1',
//   // ...
// };

// describe('CoursesController', () => {
//   let controller: CoursesController;
//   let service: CoursesService;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [CoursesController],
//       providers: [
//         {
//           provide: CoursesService,
//           useValue: {
//             create: jest.fn().mockResolvedValue({}),
//             findAll: jest.fn().mockResolvedValue([]),
//             findOne: jest.fn().mockResolvedValue({}),
//             findQuizzes: jest.fn().mockResolvedValue([]),
//             update: jest.fn().mockResolvedValue({}),
//             remove: jest.fn().mockResolvedValue(undefined),
//           },
//         },
//       ],
//     }).compile();

//     controller = module.get<CoursesController>(CoursesController);
//     service = module.get<CoursesService>(CoursesService);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//    it('should create a course', async () => {
//      const result: Course = {
//        id: 1,
//        title: 'Course 1',
//        description: 'Description 1',
//        name: 'CourseName1',
//        quizzes: [mockQuiz],
//        users: [mockUser],
//        // Include all other properties that your Course entity might have...
//      };

//      jest.spyOn(service, 'create').mockResolvedValue(result);

//      expect(await controller.create(result)).toEqual(result);
//      expect(service.create).toHaveBeenCalledWith(result);
//    });

//   it('should fetch all courses', async () => {
//     const result = [{ id: 1, title: 'Course 1', description: 'Description 1' }];

//     jest.spyOn(service, 'findAll').mockResolvedValue(result);

//     expect(await controller.findAll()).toEqual(result);
//     expect(service.findAll).toHaveBeenCalled();
//   });

//   it('should find a course by ID', async () => {
//     const result = { id: 1, title: 'Course 1', description: 'Description 1' };

//     jest.spyOn(service, 'findOne').mockResolvedValue(result);

//     expect(await controller.findOne('1')).toEqual(result);
//     expect(service.findOne).toHaveBeenCalledWith(1);
//   });

//   it('should find a course by ID', async () => {
//     const result: Course = {
//       id: 1,
//       title: 'Course 1',
//       description: 'Description 1',
//       name: 'CourseName1',
//       quizzes: [mockQuiz],
//       users: [mockUser],
//       // Include all other properties that your Course entity might have...
//     };

//     jest.spyOn(service, 'findOne').mockResolvedValue(result);

//     expect(await controller.findOne('1')).toEqual(result);
//     expect(service.findOne).toHaveBeenCalledWith(1);
//   });

//   it('should update a course', async () => {
//     const dto = { name: 'Updated Course', description: 'Updated Description' };
//     const result = { id: 1, ...dto };

//     jest.spyOn(service, 'update').mockResolvedValue(result);

//     expect(await controller.update('1', dto)).toEqual(result);
//     expect(service.update).toHaveBeenCalledWith(1, dto);
//   });

//   it('should remove a course', async () => {
//     jest.spyOn(service, 'remove').mockResolvedValue(undefined);

//     await controller.remove('1');
//     expect(service.remove).toHaveBeenCalledWith(1);
//   });
// });
