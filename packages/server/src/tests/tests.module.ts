import { Module } from '@nestjs/common'
import { TestsResolvers } from './tests.resolvers'
import { TestsService } from './tests.service'

@Module({
    providers:[TestsResolvers,TestsService],
})

export class TestsModule {}